# C# - 89ms - O(n) - Solution

**Author:** Paulo-Marcos
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/5641982/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/5641982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since the goal is to determine whether it's possible to transform the string by rearranging substrings, it's not required to actually perform the sorting. Instead, the focus should be on identifying the rules that allow for sorting a string in such a way that, if any of these rules are broken, the string cannot be transformed.

It made sense to traverse the string in reverse order because the possibilities for rearrangement are determined at the end of the string. Additionally, if a number is already in its correct position, there will be no need for further sorting.

To determine whether the string can be transformed, one way to understand the problem is to consider the simplest method, where moving a value always involves using a pair. The pairs would be swapped until the value reaches its correct position in the string.

Thus, to perform a new pairwise swap, the value on the left must always be biggest than the value on the right $$s[i] > s[i + 1]$$, so $$[2,1] => [1,2]$$. If the value on the right is greater than the one on the left, then the pair cannot be transformed. If you choose this pair $$[1,2]$$, it always gonna be $$[1,2]$$.

Furthermore, if we want to move a certain value, it must adhere to two rules.

To do this, consider that if the last values of string $$s$$ match the values of string $$t$$, then they do not need to be considered, e.g. $$s = [1234]$$ and $$t = [1324]$$, i just consider: $$s = [123]$$ and $$t = [132]$$. Also, if a change positions a value correctly at the end of string $t$, it can be disregarded as well, like $$s = [384759], t = [438579]$$, if change $$[75] => [57]$$ we got $$s = [384579], t = [438579]$$, so we consider $$s = [348], t = [438]$$ . Therefore, in the following rules, whenever the end of string $$s$$ or $$t$$ is mentioned, understand it as referring to the portion that still needs modification, ignoring the values that are already correct.

In summary, the rules are as follows:
Given an index $$a$$, if $$s[a]$$ is greater than all the values to the right of $$t$$, then no value $$s[x]$$ with $$x < a$$ can pass $$s[a]$$. $ return \\space false$.
Another case is if $$s[a] = t[x]$$ with $$x > a$$ \u2014 in other words, $$s[a]$$ is to the right of $$t$$ \u2014 and if $$s[a]$$ is smaller than all the values $$s[y]$$ with $$y > a$$, then $$s[a]$$ will never reach index $$x$$. $ return \\space false$.

Now with a bit more detail:

1. [RULE 1] Consider an index $a$ of $$s$$. This value $$(s[a])$$ must be less than or equal to the maximum value of the elements to the end of the string $$t$$, $$s[a] <= Max(t[a + 1], ..., t[a + n])$$ where $$n$$ is the length till the end of string $$t$$. This is because if the opposite happens \u2014 i.e., the value is greater than the maximum of the values to the end of the string $$t$$ \u2014 then the value from $$s$$ will occupy at least one of those positions, causing at least one required value in $$t$$ to be excluded.
    Example: 
    $$s = [24851], t = [85412]$$, consider $$index = 3$$
    $$s[2] = 8 > Max(1, 2)$$
    It\u2019s not possible to move the number $$2$$ past the number $$8$$. In other words, it would only be possible to organize $$s$$ if the 2 were already to the right of the number $$8$$.

2. [RULE 2] The second rule is that given a value in $$s$$ $$(s[a])$$, as long as it is within string $$t$$, from its index to the end of the string, $$s[a] \\in \\{x : x = t[y], y >= a\\}$$, the value in $$s$$ must be greater than or equal to the minimum of the values in $$s$$ to the end of string $$s[a] >= Min(s[a + 1], ..., s[a + n])$$ where $$n$$ is the length till the end of string $$s$$.
In other words, if it is smaller than the minimum of the values in $$s$$ above index $a$ to the end, it means it cannot be moved to the right, since all the values to the right are greater than it. Therefore, it cannot be sorted to the right, and any further reordering will only allow it to move to the left, making the transformation impossible.
    Example:
    $$s = [24185], t = [85412]$$, consider $$index = 2$$
    $$s[2] = 1$$ its equal $t[3] = 1$, with index $ 3 > 2$
    $$s[2] = 1 < Max(8, 5)$$
    It\u2019s not possible to move the number $$1$$ past the number $$8, 5$$. In other words, it would only be possible to organize $$s$$ if the $$1, 2$$ were already to the right of the number $$8$$.


# Approach
<!-- Describe your approach to solving the problem. -->

For the implementation of the algorithm, I chose to create two arrays: 
- one for the available values in $$s - available$$.
-  another for the required values in $$t - required$$. 

I also created two variables to hold the minimum of the available values $$(minAvailable)$$ and the maximum of the required values $$(maxRequired)$$.

With these variables, the process works as follows:

1. Traverse all elements of the strings in reverse order.
2. For each index, retrieve the respective values in $$s$$ and $$t$$.
3. Update the maximum required value and the minimum available value.
4. Check [RULE 1]: if the value in $$s$$ is greater than the maximum required value, then the string cannot be transformed, so $$return \\space false$$.
5. Add the values of $s$ and $t$ to the $available$ and $required$ arrays, respectively, to proceed with the possibility of shifting. At this index, for each value, increment by 1, so that if there are repetitions, the value of $available/required$ at that index will reflect the number of values that have not yet been evaluated.
6. If the value in $s$ is identified as a required value that has not yet been replaced, then check [RULE 2]:
    *  If the value in $s$ is less than the minimum value in the available array, then the string cannot be transformed.
    *  After evaluating [RULE 2], decrement the value of $s$ in $t$, ensuring that this value can be moved without breaking any rules.
7. If the value of $t$ is in the available array, also decrement the values in the $available$ and $required$ arrays, as they can now be moved without breaking any rules.
8. After traversing the string $t$, to ensure the string is transformable, check if the sum of the $required$ array equals zero. If true, it confirms that all values can be adjusted, and the string is transformable.
9. If the sum of the required array is different from zero, then the string cannot be transformed, as some value in the required array has not been fulfilled.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
I think it's $$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
I think it's $$O(n)$$

# Code
```
public class Solution {
    public bool IsTransformable(string s, string t) {
        var required = new int[10];
        var available = new int[10];
        int minAvailable = 10;
        int maxRequired = 0;

        for(var index = s.Length - 1; index >= 0; index --)
        {
            var (sValue, tValue) = SetValues(index);
            minAvailable = GetMinAvailable();
            maxRequired = GetMaxNecessary(sValue); 
            if(sValue > maxRequired) return false;
            Increase(sValue, tValue);
            if(HasNecessary(sValue))
            {
                if(sValue < minAvailable) return false;
                Decrease(sValue);
            }
            if(HasAvailable(tValue)) Decrease(tValue);
        }

        if(required.Sum() == 0) return true;

        return false;

        bool HasNecessary(int sValue)
        {
            return required[sValue] > 0;
        }

        bool HasAvailable(int tValue)
        {
            return available[tValue] > 0;
        }

        void Increase(int sValue, int tValue){
            available[sValue] ++;
            required[tValue] ++;
        }

        void Decrease(int value){
            required[value] --;
            available[value] --;
        }

        int GetMinAvailable()
        {
            var value = Array.FindIndex(available, 0, x => x > 0);
            if(value == -1) value = 0;
            return value;
        }

        int GetMaxNecessary(int sValue)
        {
            var value = Array.FindLastIndex(required,sValue, x => x > 0);
            if(value == -1) value = 9;
            return value;
        }

        (int, int) SetValues(int index)
        {
            return (s[index] - '0', t[index] - '0');
        }
    }
}
```