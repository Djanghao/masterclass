# JS, Python, Java, C++ | Polar Notation Solution w/ Explanation

**Author:** sgallivan
**Votes:** 61
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113623/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113623/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The easiest way to get a random point in a circle is to use **polar notation**. With polar notation, you can define any point in the circle with the polar angle (**ang**) and the length of the hypotenuse (**hyp**).

For both, we can apply a random number generator to give us a value in a usable range. The polar angle will be in the range **[0, 2 * pi]** and the hypotenuse will be in the range **[0, radius]**.

Things can get tricky when we're finding a random value for the hypotenuse, however, because if we evenly favor the entire allowable range, the points will tend to be more densely packed towards the center of the circle.

Take, for example, a circle with a radius of **1**. If we divide the radius in half, the area in which the points with a hypotenuse in the smaller half (**[0, 0.5]**) will be scattered is a circle of radius 0.5 whose area is defined as **pi * (0.5)^2**, or **0.25 * pi**. The area in which the points with a hypotenuse in the larger half (**[0.5, 1]**) will be scattered is the remaining difference of the larger circle, defined as **pi * 1^2 - 0.25 * pi**, or **0.75 * pi**.

![visual 1](https://i.imgur.com/1dWiDnQ.png)

So even though the two halves are even, the area described by rotating the two halves around the center are drastically different. In order to allow for an even distribution, then, we need to take the square root of the random number *before* multiplying it by the radius to get our hypotenuse, so that we can exponentially favor values farther from the center.

Once we have our values for **ang** and **hyp**, we can simply use sine and cosine to obtain values for the opposite (**opp**) and adjacent (**adj**) legs of our right triangle, which will equal the amount we need to add to/subtract from the x and y coordinates of our center point (**XC**, **YC**).

![visual 2](https://i.imgur.com/dLc2H2S.png)

---

#### ***Implementation:***

The code for all four languages is almost identical.

---

#### ***Javascript Code:***

The best result for the code below is **160ms / 55.2MB** (beats 100% / 100%).
```javascript
class Solution {
    constructor(radius, x_center, y_center) {
        this.RAD = radius
        this.XC = x_center
        this.YC = y_center
    }
    randPoint() {
        let ang = Math.random() * 2 * Math.PI,
            hyp = Math.sqrt(Math.random()) * this.RAD,
            adj = Math.cos(ang) * hyp,
            opp = Math.sin(ang) * hyp
        return [this.XC + adj, this.YC + opp]
    }
};
```

---

#### ***Python Code:***

The best result for the code below is **132ms / 24.3MB** (beats 95% / 89%).
```python
class Solution:
    def __init__(self, radius: float, x_center: float, y_center: float):
        self.RAD = radius
        self.XC = x_center
        self.YC = y_center
    def randPoint(self) -> List[float]:
        ang = random.uniform(0, 1) * 2 * math.pi
        hyp = sqrt(random.uniform(0, 1)) * self.RAD
        adj = cos(ang) * hyp
        opp = sin(ang) * hyp
        return [self.XC + adj, self.YC + opp]
```

---

#### ***Java Code:***

The best result for the code below is **193ms / 48.0MB** (beats 100% / 99%).
```java
class Solution {
    double RAD, XC, YC;
    public Solution(double radius, double x_center, double y_center) {
        RAD = radius;
        XC = x_center;
        YC = y_center;
    }
    public double[] randPoint() {
        double ang = Math.random() * 2 * Math.PI,
            hyp = Math.sqrt(Math.random()) * RAD,
            adj = Math.cos(ang) * hyp,
            opp = Math.sin(ang) * hyp;
        return new double[]{XC + adj, YC + opp};
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **84ms / 27.1MB** (beats 97% / 82%).
```c++
class Solution {
public:
    double RAD, XC, YC;
    Solution(double radius, double x_center, double y_center) {
        RAD = radius;
        XC = x_center;
        YC = y_center;
    }   
    vector<double> randPoint() {
        double ang = (double)rand() / RAND_MAX * 2 * M_PI,
            hyp = sqrt((double)rand() / RAND_MAX) * RAD,
            adj = cos(ang) * hyp,
            opp = sin(ang) * hyp;
        return vector<double>{XC + adj, YC + opp};
    }
};
```