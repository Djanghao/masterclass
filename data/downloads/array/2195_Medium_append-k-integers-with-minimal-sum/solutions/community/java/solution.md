# Java solution use n*(n+1)/2

**Author:** MonsterJo
**Votes:** 49
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823848/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823848/)

---


        Arrays.sort(nums);
        Set<Integer> set = new HashSet<>();
        long sum = 0;
        
        for (int num: nums) {
            if (!set.contains(num) && num <= k) {
                k++;
                sum += num;        
            }            
            set.add(num);
        }
        
        long res = (long)(1 + k) * k / 2 - sum;
        return res;        
    }