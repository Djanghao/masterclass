# Using ReaderWriteLockSlim

**Author:** kavvya
**Votes:** 0
**Link:** [https://leetcode.com/problems/traffic-light-controlled-intersection/solutions/4865689/](https://leetcode.com/problems/traffic-light-controlled-intersection/solutions/4865689/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System.Threading;

public class TrafficLight {
    
    bool n = true;
    ReaderWriterLockSlim rws = new ReaderWriterLockSlim();

    public TrafficLight() {
    }
    
    public void CarArrived(
        int carId,         // ID of the car
        int roadId,        // ID of the road the car travels on. Can be 1 (road A) or 2 (road B)
        int direction,     // Direction of the car
        Action turnGreen,  // Use turnGreen() to turn light to green on current road
        Action crossCar    // Use crossCar() to make car cross the intersection
    ) {
        bool crossed = false;
        rws.EnterReadLock();
        try{
            if((n && roadId == 1) || (!n && roadId == 2))
            {
                crossCar();
                crossed = true;
                return;
            }
            else
            {
                turnGreen();
            }
        }
        finally
        {
            rws.ExitReadLock();
        }

        if(!crossed)
            {
                rws.EnterWriteLock();
                try{
                    n = !n;
                    crossCar();
                }
                finally
                {
                    rws.ExitWriteLock();
                }
            }
    }




}
```