# Haha asm! Go brrrr

**Author:** aCrumble
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/5037907/](https://leetcode.com/problems/sum-of-two-integers/solutions/5037907/)

---

# Intuition
Assembly technically doesnt have + or - operators

# Approach
Assembly go brrr

# Code
```



impl Solution {
    pub fn get_sum(a: i32, b: i32) -> i32 {
        let mut sum: i32;
	    unsafe {
		    std::arch::asm!(
			    "mov {s}, {a}",
			    "add {s}, {b}",
			    s = out(reg) sum,
			    a = in(reg) a,
			    b = in(reg) b,
		    );
	    }  

	    return sum;
    }
}
```