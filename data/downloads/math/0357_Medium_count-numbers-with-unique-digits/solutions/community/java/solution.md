# Backtracking solution

**Author:** lzb700m
**Votes:** 51
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/83054/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/83054/)

---

The idea is to append one digit at a time recursively (only append digits that has not been appended before). Number zero is a special case, because we don't want to deal with the leading zero, so it is counted separately at the beginning of the program. The running time for this program is O(10!) worst case, or O(n!) if n < 10.

The OJ gives wrong answer when n = 0 and n = 1. The correct answer should be:

> 0, 1 

> 1, 10

> 2, 91

> 3, 739

>4, 5275

>5, 32491

> 6, 168571

> 7, 712891

> 8, 2345851

> 9, 5611771

> 10 and beyond, 8877691


----------


    public class Solution {
    	public static int countNumbersWithUniqueDigits(int n) {
    		if (n > 10) {
    			return countNumbersWithUniqueDigits(10);
    		}
    		int count = 1; // x == 0
    		long max = (long) Math.pow(10, n);
    
    		boolean[] used = new boolean[10];
    
    		for (int i = 1; i < 10; i++) {
    			used[i] = true;
    			count += search(i, max, used);
    			used[i] = false;
    		}
    
    		return count;
    	}
    
    	private static int search(long prev, long max, boolean[] used) {
    		int count = 0;
    		if (prev < max) {
    			count += 1;
    		} else {
    			return count;
    		}
    
    		for (int i = 0; i < 10; i++) {
    			if (!used[i]) {
    				used[i] = true;
    				long cur = 10 * prev + i;
    				count += search(cur, max, used);
    				used[i] = false;
    			}
    		}
    
    		return count;
    	}
    }