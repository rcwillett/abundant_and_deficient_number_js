# abundant_and_deficient_number_js
My work on Reddit Daily Programmer Challenge #243-easy

Description:

In number theory, a deficient or deficient number is a number n for which the sum of divisors sigma(n)<2n, or, equivalently, the sum of proper divisors (or aliquot sum) s(n)<n. The value 2n - sigma(n) (or n - s(n)) is called the number's deficiency. In contrast, an abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself
As an example, consider the number 21. Its divisors are 1, 3, 7 and 21, and their sum is 32. Because 32 is less than 2 x 21, the number 21 is deficient. Its deficiency is 2 x 21 - 32 = 10.
The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16. The amount by which the sum exceeds the number is the abundance. The number 12 has an abundance of 4, for example. The integer 12 is the first abundant number. Its divisors are 1, 2, 3, 4, 6, and 12, and their sum is 28. Because 28 is greater than 2 x 12, the number 12 is abundant. It's abundant by is 28 - 24 = 4. (Thanks /u/Rev0lt_ for the correction.)

Input Description:

You'll be given an integer, one per line. Example:
18
21
9

Output Description:

Your program should emit if the number if deficient, abundant (and its abundance), or neither. Example:

18 abundant by 3

21 deficient

9 ~~neither~~ deficient
