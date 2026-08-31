# [JavaScript] sliding window - easy-reading code and explanation

**Author:** poppinlp
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/889670/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/889670/)

---

First, the field of view in the description is a little bit abstract and hard to calculate. So, we need to find out a way to make it easier.
We could imagine that there must be a unique line get through ourselves and any target point, so we could get lots of lines from all target points.
And then, if the angle of rotating between 2 lines is smaller than `angle`, we could say that we can see them both in the field of view.

So right now, we know that we could calculate the angles for all points and how to check whether they in the same field of view.
The last question is that in which view we could see the most points.

We could write down all the angles in sorted order, and draw a field of view. It's easy to find out the view is just like a box and changing the view is just moving the 2 edges of the box.
Does this look familiar? Yes, it's a typical sliding window. So we could solve it via sliding window solution.

Here's the code, I split them into 3 parts to make it easy to read.
Hope this will be helpful. :)

```js
const visiblePoints = (points, angle, location) => {
  const angles = [];
  let max = 0;

  for (const point of points) {
    if (point[0] === location[0] && point[1] === location[1]) { ++max; continue; }
    angles.push(Math.atan2(point[1] - location[1], point[0] - location[0]) * (180 / Math.PI));
  }

  angles.sort((a, b) => a - b);
  const maxAngle = angles[angles.length - 1];
  for (const curAngle of angles) {
    if (curAngle + 360 - maxAngle > angle) break;
    angles.push(curAngle + 360);
  }

  for (let left = 0, right = 0, cur = max + 1; right < angles.length; ++right, ++cur) {
    while (angles[right] - angles[left] > angle) { ++left; --cur; }
    cur > max && (max = cur);
  }

  return max;
};
```