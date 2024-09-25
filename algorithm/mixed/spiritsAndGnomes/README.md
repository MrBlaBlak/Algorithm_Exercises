
## Problem Description:

Two players participate: a codemaker and a codebreaker.
The codemaker sets a secret number (represented as a string).
The codebreaker attempts to guess the secret number.
After each guess, the codemaker provides a hint in the format "xSyG," where:
x represents the number of Spirits: digits in the guess that are in the correct position within the secret number.
y represents the number of Gnomes: digits in the guess that are present in the secret number but in the wrong positions.


### Input:

An array containing two strings of digits with the same length.
The first element represents the secret number.
The second element represents the guess.
### Output:

A string formatted as "xSyG," where x is the number of Spirits and y is the number of Gnomes.
Constraints:

Both secret and guess are numeric strings.
They must be of equal length.
Valid string length: 1 to 1000 digits.
Examples:

Input: ["1807", "7810"] - Output: 1S3G
Input: ["1123", "0111"] - Output: 1S1G