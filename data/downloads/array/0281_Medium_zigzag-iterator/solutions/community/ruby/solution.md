# Short Ruby, O(1) space?

**Author:** StefanPochmann
**Votes:** 1
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/71889/](https://leetcode.com/problems/zigzag-iterator/solutions/71889/)

---

    class ZigzagIterator

      def initialize(v1, v2)
        @v = [v1.each, v2.each].cycle
        @n = v1.size + v2.size
      end
    
      def has_next
        @n > 0
      end
    
      def next
        @n -= 1
        @v.next.next rescue @v.next.next
      end
    end

I think this is O(1) space, but as a Ruby beginner I'm not sure.