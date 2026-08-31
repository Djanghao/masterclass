# 2 lines Ruby...

**Author:** StefanPochmann
**Votes:** 3
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/50919/](https://leetcode.com/problems/compare-version-numbers/solutions/50919/)

---

Main solution

    def compare_version(version1, version2)
      v1, v2 = [version1, version2].map { |v| v.split(".").map(&:to_i) }
      v1 + v2.map{0} <=> v2 + v1.map{0}
    end

---

Other solutions

    def compare_version(version1, version2)
      v1, v2 = [version1, version2].map { |v| v.split(".").map(&:to_i) }
      v1 + [0] * v2.size <=> v2 + [0] * v1.size
    end

    def compare_version(version1, version2)
      v1, v2 = [version1, version2].map { |v| v.split(".").map(&:to_i) }
      d = v1.size - v2.size
      v1 + [0] * [-d, 0].max <=> v2 + [0] * [d, 0].max
    end

    def compare_version(version1, version2)
      v1, v2 = [version1, version2].map { |v| v.split(".").map(&:to_i) }
      v1.fill(0, v1.size...v2.size)
      v2.fill(0, v2.size...v1.size)
      v1 <=> v2
    end