# easy peasy python [comments] bit manipulation

**Author:** lostworld21
**Votes:** 28
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/377253/](https://leetcode.com/problems/integer-replacement/solutions/377253/)

---

	def integerReplacement(self, n):
        # Basically, There are four cases in the trailing digits:
        # 00 01 10 11 which represents n % 4 == 0, 1, 2, 3
        # For any odd number, it has remaining of 1 or 3 after mod with 4. If it's 1, decrease it, if it's 3 increase it.
        # if last two digits are 011(3), then add, because 011+1 == 100, hence a bit is removed, so better?
        # but if it was 011111, then 011111+1 = 100000, more bits are removed?
        # hence, adding is always better than or equal to subtracting
        # if it is 01 then remove, 01-1 = 0.
        # n == 3 is a special case, when n == 3, decrementing by 1 gives less replacement, even 3%4 == 3
        # 3-1 = 2, 2//2 = 1, hence 2 replacement
        # but if I do 3+1 = 4, 4//2 = 2, 2//2 = 1, three operations
		
		
        cnt = 0
        while n != 1:
            if n % 2 == 0:
                n = n //2
            elif n % 4 == 1 or n == 3:
                n -= 1
            else:
                n += 1
            cnt += 1
        
        return cnt