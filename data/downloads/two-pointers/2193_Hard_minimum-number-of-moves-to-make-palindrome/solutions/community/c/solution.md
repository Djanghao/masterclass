# c++ 2 pointers with detail proof and explanation

**Author:** hl1008
**Votes:** 277
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/1847011/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/1847011/)

---

In this post I 'm not trying to give the most efficient algorithm or the simplest code. I just try to explain the essence of the problem.

A palindrome is an axial symmetry string. Every position holds the same letter with its position symmetry. 

<img src="https://assets.leetcode.com/users/images/05b7eb94-bdf5-409a-b96a-6daf13cdbefb_1647201205.0560412.png" alt="drawing" width="700"/>



The most common idea that we can come up with is using two pointers for the left end and right end. If the current two letters are the same, we advance the pointer. If not, we search for the nearest letter that will make them same and swap it. Look at the following example. 
1. The current two letters 'a' and 'd' are different. 
2. We need to exchange one of them to be the same with the other. Notice here, you may keep either one of them. Though the final string may be different, the count of moves we spend are equal(you'll see that later). Here let's keep the right end letter 'd' and search for the nearest 'd' from the left end.

<img src="https://assets.leetcode.com/users/images/7b842f9f-2350-4517-aebf-ee9483ee151b_1647201247.1059253.png" alt="drawing" width="700"/>

3. After we find the nearest 'd', we need to swap it to the 0-position.

<img src="https://assets.leetcode.com/users/images/3b3270d3-5637-4232-9cc8-c4f5fae42ae1_1647201266.464941.png" alt="drawing" width="700"/>

4. We advance the two pointers and repeat the same steps until the two pointers meet.

<img src="https://assets.leetcode.com/users/images/d1ef03b5-8b45-4a93-a157-7316f3886cb4_1647201281.6635847.png" alt="drawing" width="700"/>


I believe the aforementioned method is easy to understand. However, the difficulty is how we can know the method leads to the minimum moves. Can we convert the string to an arbitrary palindrome with minimal moves? If not, what kind of string we can convert to with minimal moves?

**The key point is relative order between the letters.**

Since the palindrome is axial symmetry, the same letter pair in the left part and right part must have the opposite relative order. So if two letter pairs have the same relative order, you can't avoid swapping them. In the meantime, if two letter pairs already have the opposite relative order, you should avoid swapping them, or you'll introduce redundant moves and lead to non-optimal solution.

Let's look at the example now. All the letters in the left part and right part have the same order. 

<img src="https://assets.leetcode.com/users/images/b0cb65ed-38a6-4b55-aa58-d7ebfbc76006_1647201297.2784958.png" alt="drawing" width="700"/>

So you need to swap letters to make all the letter pairs in left and right opposite.  You don't have to start from the end, and you can convert either left part or right part. Though this can lead to different palindrome, they all cost the same moves. See the below moves which randomly select the letter pair to swap. After 6 moves, it ends with a different palindrome compared to the former solution.

<img src="https://assets.leetcode.com/users/images/e94bd00b-3354-4107-a134-efe9110d528d_1647201351.8659885.png" alt="drawing" width="300"/>

When we say "randomly" here, it means the order of the letter pair we swap. In fact, you can see that all the letter pairs we swap are exactly the combination of the 4 letters 'abcd'. That's why we need 6 moves. We swap every letter pair because in this example, all the letter pair from left and right have the same order. So they all need to be swapped once each. 
Let's look at another example. 

<img src="https://assets.leetcode.com/users/images/0a16b279-dff9-41fb-982a-f46696a80c1e_1647201374.874811.png" alt="drawing" width="700"/>

In this example, let's compare the letter pairs relative order in left and right side.
(a, b) -- (b, a) -- opposite
(a, c) -- (c, a) -- opposite
(a, d) -- (a, d) -- same
(b, c) -- (b, c) -- same
(b, d) -- (b, d) -- same
(c, d) -- (c, d) -- same
So, we need to swap 4 letter pairs at least.

We see that (a, b) and (a, c) pair already have the opposite order in the left and right side. So they don't need to be swapped again. But for all the other 4 letter pairs, they still need to be swapped. During your solution you should avoid swapping the letter pair that are already in their right order. 
See below, you should not try to swap (c,d) first, which will cause (c, a) be swapped. The same with (b, d).

<img src="https://assets.leetcode.com/users/images/770e6660-c9f2-447b-be4b-44127be57754_1647201397.2791355.png" alt="drawing" width="700"/>


So you can swap (a,d) or (b,c) either you like.


<img src="https://assets.leetcode.com/users/images/2545dcef-6b66-4996-bed8-f6c2cb58a7bc_1647201429.7843585.png" alt="drawing" width="500"/>

After 4 moves, we get to the end.

Till now, let's answer the question posed earlier. What kind of palindrome can we convert to with minimal moves? The answer should be the palindromes that keep the letter pair order which have already met the conditions. 
In the above example "abcdbcad", palindromes like "cabddbac", "bacddcab" are definitely impossible with minimal moves to convert to. Because they require to swap (a,c), (a, b) which are already in good state.

Let's try a little more tricky example. The letters are not located on their target side. So what we should keep in mind is just do the necessary swap. 

<img src="https://assets.leetcode.com/users/images/43b6273c-3ff4-458d-a93b-f51f15c17eec_1647201462.2549217.png" alt="drawing" width="700"/>

First, we need to know which letter belongs to which side. We should choose the closest letters to each side in order to reduce the moves. Green ones belong to the left side while blue ones belong to the right side.

<img src="https://assets.leetcode.com/users/images/9cdeae3b-e49d-44f7-97b8-488b3c4af38e_1647201475.2718742.png" alt="drawing" width="700"/>

Now, besides keeping the relative orders, we still need to think about the side. We can not avoid the moves that swap all the blue ones to the right of the green ones.

<img src="https://assets.leetcode.com/users/images/97d0aa9e-c8a5-4748-8112-f1f91df983e8_1647201505.9667459.png" alt="drawing" width="700"/>


Finally, let's see why the two pointers algorithm work well. See below, if you keep right end 'd' still, you know that all the other letters are to its left. So when you find and swap the nearest 'd' to left end , you are sure that every single swap you make isn't unnecessary, because 'd' should be in front of all of them. 

<img src="https://assets.leetcode.com/users/images/52baf247-4204-45c6-b445-04b31619e35b_1647201520.1659758.png" alt="drawing" width="700"/>


After the whole idea is clear, let's talk a little bit about a special case we need to notice. When the string length is odd, there must be a letter that has no partner. See the following example, the 'z' has no counterpart. So when we try to search 'z' from the left end, we will end up meeting the right end pointer q. In that case, we know 'z' should be the centerpoint of the result. 

<img src="https://assets.leetcode.com/users/images/cd584ade-5e37-4873-b1bc-c8edba1057db_1647201537.4622815.png" alt="drawing" width="700"/>

You can record the position of 'z' and advance the q pointer. At the end of the whole process, you can swap 'z' to the centerpoint. Notice here, you should avoid trying to swap the 'z' to the center before the whole process ends. That is because at this time you can't guarantee all the swap you do is necessary. See the example below. The green 'd' is swapped to the right side of 'z' which is an unnecessary cost, because it should be on the left size at the end. However, when you do this after the whole process ends, you won't have this problem.
<img src="https://assets.leetcode.com/users/images/96fe39f1-06bd-4a38-8344-0e643a562187_1653135480.8935752.png" alt="drawing" width="700"/>

```
indrome(string s) {
     
        int l = 0;
        int r = s.length() - 1;

        int count = 0;
        int center_i = -1;
        
        while (l < r) {
            if (s[l] == s[r]) {
                l++;
                r--;
                continue;
            }

            int k = l + 1;
            for (; k < r; k++) {
                if (s[k] == s[r]) {
                    break;
                }
            }

            if (k == r) {
                center_i = r;
                r--;
                continue;
            }

            for (int j = k; j > l; j--) {
                swapChar(j, j - 1);
                count++;
            }
            
            l++;
            r--;
        }
        
        if (center_i != -1) {
            count += (center_i - s.size() / 2);
        } 
     
        return count;
    }
};
```