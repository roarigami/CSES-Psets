"""
CSES Problem Set Intro #2 Missing Number
You are given all numbers between 1,2,…,n except one.
Your task is to find the missing number.
"""
n = int(input())

def missingNum(n):
    ans = n * (n+1)//2 - sum(int(i) for i in input().split())
    return ans

print(missingNum(n))
