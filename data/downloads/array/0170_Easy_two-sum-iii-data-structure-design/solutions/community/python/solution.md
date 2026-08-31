# Fast and simple AC Python

**Author:** StefanPochmann
**Votes:** 52
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/52034/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/52034/)

---

Just submitted this five times, got accepted in 560, 564, 580, 580 and 560 ms. Much faster than all other recent accepted Python submissions, which range from 704 to 836 ms (and apparently the time limit is shortly after that).

    class TwoSum:
    
        def __init__(self):
            self.ctr = {}
    
        def add(self, number):
            if number in self.ctr:
                self.ctr[number] += 1
            else:
                self.ctr[number] = 1
    
        def find(self, value):
            ctr = self.ctr
            for num in ctr:
                if value - num in ctr and (value - num != num or ctr[num] > 1):
                    return True
            return False

---

**My previous, nicer solution and some thoughts**

I submitted this five times and got it accepted in 760, 736, 708, 712 and 732 ms:

    class TwoSum:
    
        def __init__(self):
            self.ctr = collections.defaultdict(int)
    
        def add(self, number):
            self.ctr[number] += 1
    
        def find(self, value):
            ctr = self.ctr
            return any(value - num in ctr and (value - num != num or ctr[num] > 1)
                       for num in ctr)

The following comments refer to this previous solution, but are still relevant:

- As I wrote previously, [test order matters](https://leetcode.com/discuss/50800/short-and-fast-c). For example, switching the order to  
`(value - num != num or ctr[num] > 1) and value - num in ctr`  
makes me get TLE consistently.
- `collections.Counter` would be a more obvious choice, but `collections.defaultdict` is faster. Using `Counter`, I consistently get TLE.
- I don't shortcut `ctr = self.ctr` just to make the rest prettier but also to make it faster. Looks like that saves ~70 ms on average.

You can see in my new even faster solution I did a few more changes, which all helped.

I also recommend [Guido van Rossum's essay about optimization](https://www.python.org/doc/essays/list2str/), which includes the local variable optimization. Even Guido himself got surprised at one point :-)