"""
CSES Problem Set Intro #2 Missing Number
You are given all numbers between 1,2,…,n except one.
Your task is to find the missing number.
"""
n = int(input())
ans = n * (n+1)//2 - sum(int(i) for i in input().split())
print(ans)
