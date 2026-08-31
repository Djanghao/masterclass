# Easy explanation. Code in java.

**Author:** SaiSwaroop1234
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5732185/](https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5732185/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think how to get palindromes for n digits. It's simple the other half is same. So you can perform the given required operations on it by doubling it. (Different for even no.of digits and odd no.of digits)
# Approach
<!-- Describe your approach to solving the problem. -->
Stored the number sorted in the digits in a HashSet. Then iterate through that hashset and find out the combinations we can arrange the numbers and count them. That's it. You will get the answer.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(10 ^ n/2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public long countGoodIntegers(int n, int k) {
        long c=0;
        HashSet<String> h=new HashSet<>();
        if (n%2==0)
        {
            n/=2;
            for(int i=(int)Math.pow(10,n-1);i<Math.pow(10,n);i++)
            {
                String r= new StringBuilder(""+i).reverse().toString();
                r=""+i+r;
                long l1=Long.valueOf(r);
                if(l1%k==0)
                {
                    char[] charArray = r.toCharArray();
                    Arrays.sort(charArray);
                    String sortedString = new String(charArray);
                    h.add(sortedString);
                }
            }
        }
        else
        {
            n-=1;
            n/=2;
            for(int i=(int)Math.pow(10,n);i<Math.pow(10,n+1);i++)
            {
                String r= new StringBuilder((""+i).substring(0,(""+i).length()-1)).reverse().toString();
                r=""+i+r;
                long l1=Long.valueOf(r);
                if(l1%k==0)
                {
                    char[] charArray = r.toCharArray();
                    Arrays.sort(charArray);
                    String sortedString = new String(charArray);
                    h.add(sortedString);
                }
            }
        }
        for(String s1:h)
        {
            long n1=1;
            long d1=1;
            int j=1;
            int j1=0;
            if(s1.charAt(0)=='0')
            {
                j1++;
            }
            for(int i=1;i<s1.length();i++)
            {
                n1*=(i+1);
                if(s1.charAt(i)==s1.charAt(i-1))
                {
                    j++;
                }
                else
                {
                    j=1;
                }
                d1*=j;
                if(s1.charAt(i)=='0')
                {
                    j1++;
                }
            }
            if(j1>0)
            {
                c=c+(n1/d1)-((n1/s1.length())/(d1/j1));
            }
            else
            {
                c=c+(n1/d1);
            }
        }
        return c;
    }
}
```