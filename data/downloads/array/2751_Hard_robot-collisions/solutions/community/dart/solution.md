# SUPER EASY 💪🔥✨

**Author:** CodeWithSparsh
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5473633/](https://leetcode.com/problems/robot-collisions/solutions/5473633/)

---

# Intuition
To solve this problem, we need to simulate the movements and collisions of robots on a line. The key is to handle the collisions efficiently, ensuring that we update the health of robots correctly and determine the survivors after all possible collisions have occurred.

# Approach
1. **Representation**: Represent each robot as a tuple containing its position, health, direction, and original index.
2. **Sorting**: Sort the robots by their positions to simulate their movements correctly.
3. **Stack for Collisions**: Use a stack to process the collisions. Push robots moving to the right onto the stack. When encountering a robot moving left, process any potential collisions with the robots in the stack.
4. **Collision Handling**: 
    - If the health of the left-moving robot is greater, reduce its health and remove the right-moving robot from the stack.
    - If the health of the right-moving robot is greater, reduce its health and continue with the next robot.
    - If both robots have the same health, remove both from the stack.
5. **Collect Survivors**: After processing all robots, the remaining robots in the stack are the survivors.
6. **Result**: Return the health of the surviving robots in the order they were given in the input.

# Complexity
- **Time complexity**: \\(O(n \\log n)\\) for sorting the robots by position, and \\(O(n)\\) for processing the collisions, giving a total of \\(O(n \\log n)\\).
- **Space complexity**: \\(O(n)\\) for storing the robots and using the stack.

# Code
```java
class Solution {
  public List<Integer> survivedRobotsHealths(List<Integer> positions, List<Integer> healths, String directions) {
    int n = positions.size();
    List<Integer> survivors = new ArrayList<>();
    List<Integer> survivorIndexes = new ArrayList<>();
    
    // Create a list of tuples (position, health, direction, index)
    List<List<Object>> robots = new ArrayList<>();
    for (int i = 0; i < n; i++) {
      robots.add(Arrays.asList(positions.get(i), healths.get(i), directions.charAt(i), i));
    }
    
    // Sort the robots by their positions
    robots.sort((a, b) -> Integer.compare((int) a.get(0), (int) b.get(0)));
    
    // Use a stack to process the collisions
    Stack<List<Object>> stack = new Stack<>();
    
    for (var robot : robots) {
      if (robot.get(2).equals('R')) {
        stack.push(robot); // push the robot moving right to the stack
      } else {
        // Process collisions
        while (!stack.isEmpty() && stack.peek().get(2).equals('R') && (int) stack.peek().get(1) < (int) robot.get(1)) {
          var collidedRobot = stack.pop();
          robot.set(1, (int) robot.get(1) - 1); // reduce health of current left-moving robot
        }
        if (!stack.isEmpty() && stack.peek().get(2).equals('R')) {
          if (stack.peek().get(1).equals(robot.get(1))) {
            stack.pop(); // both robots are destroyed
          } else {
            stack.peek().set(1, (int) stack.peek().get(1) - 1); // reduce health of the right-moving robot
          }
        } else {
          survivors.add((int) robot.get(1)); // current robot survived
          survivorIndexes.add((int) robot.get(3)); // keep the original index
        }
      }
    }
    
    // Add remaining right-moving robots to survivors
    for (var robot : stack) {
      survivors.add((int) robot.get(1));
      survivorIndexes.add((int) robot.get(3));
    }
    
    // Sort the survivors by their original indexes
    List<Integer> result = new ArrayList<>(Collections.nCopies(n, 0));
    for (int i = 0; i < survivors.size(); i++) {
      result.set(survivorIndexes.get(i), survivors.get(i));
    }
    
    return result.stream().filter(health -> health != 0).collect(Collectors.toList());
  }
}
```

This code efficiently handles the movements and collisions of robots and returns the health of the surviving robots in the correct order.