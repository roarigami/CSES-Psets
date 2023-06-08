"""
CSES Problem Set Intro #3 Repetition
You are given a DNA sequence: a string consisting of characters A, C, G, and T.
Your task is to find the longest repetition in the sequence.
This is a maximum-lengthsubstring containing only one type of character.
"""

s = input()

def longestRep(s):
    ans = 1
    longestSubstrLen = 0
    current = ""

    for char in s:
        if char == current:
            longestSubstrLen += 1
            ans = max(longestSubstrLen, ans)
        else:
            current = char
            longestSubstrLen = 1

    return ans

print(longestRep(s))
