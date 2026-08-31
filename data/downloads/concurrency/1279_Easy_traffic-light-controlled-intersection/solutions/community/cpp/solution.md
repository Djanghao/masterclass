# C++ - Mutex and lock_guard

**Author:** yashrshah14
**Votes:** 3
**Link:** [https://leetcode.com/problems/traffic-light-controlled-intersection/solutions/1548247/](https://leetcode.com/problems/traffic-light-controlled-intersection/solutions/1548247/)

---

We're comparing current_road_id to indicate which road_id currently has green lights on. 
If current_road_id == road_id, we allow traffic to pass. 
If not, then we use lock_guard to apply a mutex lock on current_road_id. A lock_guard is used to apply a lock till the context terminates, in this case, it means it will apply a lock on variable current_road_id before we change it's value and allowing current road's traffic to pass. 

```
class TrafficLight {
public:
    int current_road_id = 1;
    std::mutex mtx;
    TrafficLight() {}

    void carArrived(
        int carId,                   // ID of the car
        int roadId,                  // ID of the road the car travels on. Can be 1 (road A) or 2 (road B)
        int direction,               // Direction of the car
        function<void()> turnGreen,  // Use turnGreen() to turn light to green on current road
        function<void()> crossCar    // Use crossCar() to make car cross the intersection
    ) {
	    std::lock_guard<std::mutex> lck (mtx);
        if(roadId != current_road_id)
        {
            current_road_id = roadId;
            turnGreen();
        }
        crossCar();
    }
};
```