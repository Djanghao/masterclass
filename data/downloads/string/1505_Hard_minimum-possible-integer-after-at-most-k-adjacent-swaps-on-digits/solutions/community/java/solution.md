# O(n logn) | Detailed Explanation

**Author:** khaufnak
**Votes:** 298
**Link:** [https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/720548/](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/720548/)

---

A hard question = Lots of observation + data structures 

Let's figure out observations and then find out data structure to implement them.

>Observation 0: Well, we know that if we could get smallest digit to the left, then we will be able to make number smaller than we currently have. In that sense, a sorted number(Ascending) will already be smallest. 

So, let's take pen and paper and try to find smallest number we can form for this:

```"4321", k = 4```

So, let's try to move 1 to left most postion. From now on, I'll call the current digit we are moving to left as ```d```:
```"4321", k = 4```
```"4312", k = 3```
```"4132", k = 2```
```"1432", k = 1```
Hmm, we can clearly observe: 

>Observation 1: when we move a digit to left, other digit are shifted to right. i.e 432 got shifted to right by 1.

But, wait.  What if there was another digit to right of ```d```?
```"43219", k = 4```
```"43129", k = 3```
```"41329", k = 2```
```"14329", k = 1```

Well, location of 9 didn't change. Therefore, we can make some correction to our above observation. 

>Corrected observation 1: Only digits to the left of ```d``` get their position shifted.

Alright, what's next?

But what if the ```k``` was really small and we couldn't move 1 to left most?
```"43219", k = 2```
```"43129", k = 1```
```"41329", k = 0```

Hmm, something is fishy, we clearly didn't reach smallest number here. Smallest for ```k=2``` would be ```24319```.

We can observe here, that we should choose smallest ```d``` that is in the reach of ```k```. 

>Observation 2: Choose first smallest ```d``` that is in reach of ```k```. 

If we combine all the observation, we can see that we will iterate from left to right and try to place digits 0 through 9.
Let's work through a bigger example:

```"9438957234785635408", k = 23```

We will start from left. Let's try to place 0 here. ```0``` is within reach of ```k```,  ```0``` is 17 shifts away to right. So, we will get:
```"0943895723478563548", k = 6```

Observe that all the number got shifted to right except the once to the right of ```d``` (8, here).  

Now, let's move to next position:
Let's try to place 0 here, again. But wait, we don't 0 left, so try 1, which is not there also. So let's try 2, 2 is 8 distance away from this position. ```8 > k```, so we cannot choose 2. Let's try 3, 3 is 2 distance away. 2 < k, therefore let's choose 3.

```"0394895723478563548", k = 4```

and we can continue like this.

>For observation 1, to calculate the correct number of shifts, we will need to also store how many elements before ```d``` already shifted. We will use segment tree for this.
>For observation 2, We will use queue to choose latest occurence of each digit.


```
class Solution {
    public String minInteger(String num, int k) {
        //pqs stores the location of each digit.
        List<Queue<Integer>> pqs = new ArrayList<>();
        for (int i = 0; i <= 9; ++i) {
            pqs.add(new LinkedList<>());
        }

        for (int i = 0; i < num.length(); ++i) {
            pqs.get(num.charAt(i) - '0').add(i);
        }
        String ans = "";
        SegmentTree seg = new SegmentTree(num.length());

        for (int i = 0; i < num.length(); ++i) {
            // At each location, try to place 0....9
            for (int digit = 0; digit <= 9; ++digit) {
                // is there any occurrence of digit left?
                if (pqs.get(digit).size() != 0) {
                    // yes, there is a occurrence of digit at pos
                    Integer pos = pqs.get(digit).peek();
					// Since few numbers already shifted to left, this `pos` might be outdated.
                    // we try to find how many number already got shifted that were to the left of pos.
                    int shift = seg.getCountLessThan(pos);
                    // (pos - shift) is number of steps to make digit move from pos to i.
                    if (pos - shift <= k) {
                        k -= pos - shift;
                        seg.add(pos); // Add pos to our segment tree.
                        pqs.get(digit).remove();
                        ans += digit;
                        break;
                    }
                }
            }
        }
        return ans;
    }

    class SegmentTree {
        int[] nodes;
        int n;

        public SegmentTree(int max) {
            nodes = new int[4 * (max)];
            n = max;
        }

        public void add(int num) {
            addUtil(num, 0, n, 0);
        }

        private void addUtil(int num, int l, int r, int node) {
            if (num < l || num > r) {
                return;
            }
            if (l == r) {
                nodes[node]++;
                return;
            }
            int mid = (l + r) / 2;
            addUtil(num, l, mid, 2 * node + 1);
            addUtil(num, mid + 1, r, 2 * node + 2);
            nodes[node] = nodes[2 * node + 1] + nodes[2 * node + 2];
        }

        // Essentialy it tells count of numbers < num.
        public int getCountLessThan(int num) {
            return getUtil(0, num, 0, n, 0);
        }

        private int getUtil(int ql, int qr, int l, int r, int node) {
            if (qr < l || ql > r) return 0;
            if (ql <= l && qr >= r) {
                return nodes[node];
            }

            int mid = (l + r) / 2;
            return getUtil(ql, qr, l, mid, 2 * node + 1) + getUtil(ql, qr, mid + 1, r, 2 * node + 2);
        }
    }

}
```

If you don't know about segment tree. This is simplest segment tree and you can look up ```sum of ranges using segment tree``` on Google and you will find million articles. You can also use Balanced BST, BIT (Thanks @giftwei for suggestion) to get same complexity.

