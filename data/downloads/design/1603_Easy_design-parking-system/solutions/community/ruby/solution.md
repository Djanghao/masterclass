# Fastest || Easiest || One liner

**Author:** rajkamallashkari
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/2827802/](https://leetcode.com/problems/design-parking-system/solutions/2827802/)

---

```
class ParkingSystem
    def initialize(big, medium, small)
        @space = [big, medium, small]
    end

    def add_car(car_type)
        -1 < @space[car_type - 1] -= 1
    end
end
```