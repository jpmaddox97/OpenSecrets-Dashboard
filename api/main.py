import os
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
from opensecrets_api import OpenSecrets

load_dotenv(dotenv_path="./.env.local")

OPENSECRETS_KEY=os.environ.get("OPENSECRETS_API", "")
DEBUG=bool(os.environ.get("DEBUG", True))

if not OPENSECRETS_KEY:
  raise EnvironmentError("Please create .env.local file and insert OPENSECRETS_KEY")

o = OpenSecrets(OPENSECRETS_KEY)

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG


@app.route("/")
def welcome():
    return "Welcome to the OpenSecrets Clone API"


@app.route("/legislators")
def legislators():
    state = request.args.get("state")
    return {index : object["@attributes"] for index, object in enumerate(o.get_legislators(state))}


@app.route("/member_pfd")
def member_pfd():
    cid = request.args.get("cid")
    return o.get_member_pfd_profile(cid)["@attributes"]


@app.route("/candidate_summary")
def candidate_summary():
    cid = request.args.get("cid")
    return o.get_candidate_summary(cid)


@app.route("/candidate_contributors")
def candidate_contributors():
    cid = request.args.get("cid")
    data = o.get_candidate_contributors(cid)

    contributors = {index : object["@attributes"] for index, object in enumerate(data[0])}
    candidate = data[1]
    payload = {
        "contributors": contributors,
        "candidate": candidate
    }
    return payload


@app.route("/candidate_industries")
def candidate_industries():
    cid = request.args.get("cid")
    data = o.get_candidate_industries(cid)

    industry = {index : object["@attributes"] for index, object in enumerate(data[0])}
    candidate = data[1]
    payload = {
        "industry": industry,
        "candidate": candidate
    }
    return payload


@app.route("/candidate_total_by_industry")
def candidate_total_by_industry():
    cid = request.args.get("cid")
    industry_id = request.args.get("industry_id")

    return o.get_candidate_total_by_industry(cid, industry_id)


@app.route("/candidate_total_by_sector")
def candidate_total_by_sector():
    cid = request.args.get("cid")
    data = o.get_candidate_total_by_sector(cid)

    sector = {index : object["@attributes"] for index, object in enumerate(data[0])}
    candidate = data[1]
    payload = {
        "sector": sector,
        "candidate": candidate
    }
    return payload


# Finish congress committee by industry and organizations endpoints
# Add organizations summary and independent expenditure end points
@app.route("/congress_committee_by_industry")
def congress_committee_by_industry():
    # Needs further testing (find committee id, industry id and congress number)
    committee_id = request.args.get("committee_id")
    industry_id = request.args.get("industry_id")
    data = o.get_congress_committee_by_industry(committee_id, industry_id)

    sector = {index : object["@attributes"] for index, object in enumerate(data[0])}
    candidate = data[1]
    payload = {
        "sector": sector,
        "candidate": candidate
    }
    return payload


@app.route("/organizations")
def organizations():
    query = request.args.get("query")

    return o.get_organizations(query)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)