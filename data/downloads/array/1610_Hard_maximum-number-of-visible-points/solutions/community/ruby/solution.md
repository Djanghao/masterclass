# Ruby solution

**Author:** pocha
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/1648994/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/1648994/)

---

I think the major challenge is the math in this problem. 

Here are the steps 

1. Calculate angle of line between every point & start location. y2 - y1 / x2 - x1 gives you tan(theta). So you need to find tan inverse of it. The angle will be in radian. So multiple it with 180/pi to get the angle in degrees. 
2. Apply sliding window. Start from 1st point & keep including points till the angle covered is > given angle. Then start discarding points from the start. Use a queue (pretty standard sliding window implementation). 

**Gotchas**
1. If a point coincide with the start point, the angle will come out to be 0 but it will be included in all the views. Hence count them at the start & exclude them from calculation. `same_as_location_point_count` variable in the code. 
2. Since angles are round in nature, if you have 2 points with angles - [-135 & 135] & given angle is 90, you need to come to -135 again. Something like [-135, 135, -135, 135]. But -135 - 135 will be smaller than 90. So when you repeat the angles, add 360 to it. So this will become [-135, 135, 225, 495] . Now 225 - 135 = 90 & these 2 points will come under the view. The complexity will still be O(n)

Code below 
```
def visible_points(points, angle, location)
    angles = []
    same_as_location_point_count = 0
    points.each do |point|
        if point == location
            same_as_location_point_count += 1
            next
        end
        angles << Math.atan2(point[1] - location[1], point[0] - location[0]) * 180 / Math::PI
    end

    angles.sort!
    #puts angles.inspect
    angles += angles.map {|val| val + 360}
    
    queue = []
    count = 0
    max_count = 0
    angles.each do |_angle|
        
        while queue.length > 0 and _angle - queue[0] > angle
            queue.shift
        end
        queue.push(_angle)
        
        #puts queue.inspect
        count = queue.size
        max_count = count if max_count < count
    end
    max_count + same_as_location_point_count
end
```