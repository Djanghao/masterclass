# ONE_LINER || 100% || Easy|| Explained||O(n)

**Author:** ManojKumarPatnaik
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/1919537/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/1919537/)

---

Method 1: Hashing

Put all ints in a set then check if their doubles exist.
Special case is of 0 since 0 is double of itself. So while adding to set if 0 is encountered twice, return true
Then while check for double in the second loop, ignore 0
T/S: O(n)/O(n)****```


    public boolean checkIfExist(int[] arr) {
        var set=new HashSet<Integer>();
        return Arrays.stream(arr).anyMatch(n->!set.add(n)&&n==0)||Arrays.stream(arr).anyMatch(n->set.contains(n*2)&&n!=0);
    }
}
```