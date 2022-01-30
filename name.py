import string 
import subprocess
from string import digits
import sys

n = len(sys.argv)
if n>1:
    str=sys.argv[1]
    str=str.split("@")[0]
    str = str.rstrip(string.digits).lstrip(digits)
    print(str)
