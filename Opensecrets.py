from api.opensecrets_api import OpenSecrets
from dotenv import load_dotenv
import os

load_dotenv()
os_key = os.getenv("OpenSecrets_API")

# Init class
o = OpenSecrets(os_key)

# for i in o.get_legislators("ca"):
#     print(i['@attributes'])

# industry code = K01
# cid = N00027533



print({index : object["@attributes"] for index, object in enumerate(o.get_legislators("ny"))})