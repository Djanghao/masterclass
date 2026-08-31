# Ruby binary search

**Author:** StefanPochmann
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/75174/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/75174/)

---

Got the algorithm idea from ruichang.

---

**Solution 1**

    def min_area(image, i, j)
      m, n = image.size, image[0].size
      top    =  (0..i).bsearch { |i|  image[i].include?('1') }
      bottom = (i...m).bsearch { |i| !image[i].include?('1') } || m
      left   =  (0..j).bsearch { |j|  image.any? { |row| row[j] == '1' } }
      right  = (j...n).bsearch { |j| !image.any? { |row| row[j] == '1' } } || n
      (bottom - top) * (right - left)
    end

---

**Solution 2**

    def min_area(image, i, j)
        top, bottom = [0..i, (image.size-1).downto(i).to_a].map {
            |range| range.bsearch { |i| image[i].include? '1' }
        }
        left, right = [0..j, (image[0].size-1).downto(j).to_a].map {
            |range| range.bsearch { |j| image.any? { |row| row[j] == '1' } }
        }
        (bottom - top + 1) * (right - left + 1)
    end