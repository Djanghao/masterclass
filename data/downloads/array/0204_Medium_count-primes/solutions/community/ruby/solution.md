# Ruby is so nice ("1-liner")

**Author:** StefanPochmann
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-primes/solutions/57720/](https://leetcode.com/problems/count-primes/solutions/57720/)

---

Not a 100% serious solution for this problem, but I only just learned that Ruby has this, and wanted to share. Can maybe be useful in some other problems.

    require 'prime'
    
    def count_primes(n)
      Prime.each(n-1).count
    end

Not surprisingly, it's also fast. Four out of five times I submitted it, it was faster than all other Ruby submissions.