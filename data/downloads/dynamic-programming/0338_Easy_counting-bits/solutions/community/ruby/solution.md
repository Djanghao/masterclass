# 2 lines in Ruby

**Author:** StefanPochmann
**Votes:** 4
**Link:** [https://leetcode.com/problems/counting-bits/solutions/79917/](https://leetcode.com/problems/counting-bits/solutions/79917/)

---

    def count_bits(num)
      counts = (0..num).to_a
      counts.map! { |i| i%2 + counts[i/2] }
    end

---

Golfing:

    def count_bits(num)
      (c=(0..num).to_a).map!{|i|i%2+c[i/2]}
    end

Less efficient way saves a character:

    def count_bits(num)
      (0..num).map{|i|("%b"%i).count("1")}
    end