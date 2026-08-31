# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5857425/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5857425/)

---

# Intuition
The problem is about determining how many points you can see from a fixed position on a plane when you can only rotate to look within a certain angle. You need to figure out the angles to these points and find how many can fit within your field of view at any angle you choose.

# Approach
Calculate the angles of points relative to your position, sort these angles, extend the sorted list to handle wrap-around, and then use a two-pointer technique to count how many points fall within the specified angle range.

# Complexity
- Time complexity:
O(n log n) due to sorting the angles.

- Space complexity:
O(n) for storing the angles. This is efficient enough given the problem constraints, making it manageable even for larger inputs.

# Code
```csharp []
public class Solution {
    public int VisiblePoints(IList<IList<int>> points, int angle, IList<int> location) {
        int n = points.Count;
        int locationX = location[0], locationY = location[1];
        List<double> angles = new List<double>();

        // Step 1: Calculate angles for all points, ignoring points at the location
        for (int i = 0; i < n; i++) {
            int x = points[i][0], y = points[i][1];
            if (x == locationX && y == locationY) {
                continue; // Skip points at the observer's location
            }
            double dx = x - locationX;
            double dy = y - locationY;
            double angleToPoint = Math.Atan2(dy, dx) * 180 / Math.PI; // Convert radian to degree
            angles.Add(angleToPoint);
        }

        // Step 2: Sort angles
        angles.Sort();

        // Step 3: Duplicate angles for circular wrap around
        int m = angles.Count;
        List<double> extendedAngles = new List<double>(angles);
        for (int i = 0; i < m; i++) {
            extendedAngles.Add(angles[i] + 360); // Wrap around
        }

        // Step 4: Use two pointers to find the maximum points in the visible range
        int maxVisible = 0;
        int right = 0;

        for (int left = 0; left < m; left++) {
            // Move right pointer to the rightmost angle within the field of view
            while (right < extendedAngles.Count && extendedAngles[right] <= extendedAngles[left] + angle) {
                right++;
            }
            maxVisible = Math.Max(maxVisible, right - left);
        }

        // Step 5: Count points at the location
        int pointsAtLocation = n - angles.Count; // Count of points directly at the observer's location

        // Step 6: Return the total visible points
        return maxVisible + pointsAtLocation;
    }
}

```