# PHP Solution with Bear Memes

**Author:** user8675309
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6059791/](https://leetcode.com/problems/check-balanced-string/solutions/6059791/)

---

# Intuition
I have a habit of solving digit sum problems *without* converting to a `string`. Why allocate a whole new array of characters, when you can recycle the same integer.

# Gotcha
This habit tripped me up today, as `$num` in this problem can be *larger than the average integer*. \uD83D\uDC3B

# BCMath
While most coders would give up and revert to working with the string, I'm not most coders. I used this opportunity to explore other creative solutions, and discovered LeetCode offers [BC Math](https://www.php.net/manual/en/book.bc.php).

**BCMath Arbitrary Precision Mathematics** is a PHP module which allows for working numbers larger than `int` and more precise than `float`.

While using this module on an Easy LeetCode problem is overkill, it's great for practice. And that's what LeetCode should be for: not for points or badges, but for practicing new techniques. (...okay, I'll get off my soapbox. Can someone help me down? [I'm getting old](https://en.wikipedia.org/wiki/Yogi_Bear).)

# Code
```php []
class Solution {

    /**
     * @param String $num
     * @return Boolean
     */
    function isBalanced($num) {
        
        // Even digits are stored in one element,
        // odd digits are stored in the other.
        $result = [0,0];

        // Switches between 0 and 1.
        $toggle = 0;

        while ($num > 0) {

            // Your standard "digit sum" math.
            // Using BC Math.
            $result[$toggle] += bcmod($num, 10);
            $num = bcdiv($num, 10);

            // Switches between 0 and 1.
            $toggle = 1 - $toggle;
        }

        // Compare for equality.
        return $result[0] == $result[1];
    }
}
```