# 100% Beats with dart

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/5491075/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/5491075/)

---



# Code
```
class Robot {
  // 0 - East  // 1 - North // 2 - West // 3 - South

  late int width_max;
  late int height_max;
  List<int> position = [0, 0];
  int direction = 0;
    List<String> location= ['East', 'North', 'West', 'South'];

  Robot(int width, int height) {
    width_max = width - 1;
    height_max = height - 1;
  }

  void transfer() {
    direction = (direction + 1) % 4;
  }

  void step(int num) {
    while (num > 0) {
      if (direction == 0) { // \u0110\xF4ng
        int steps = width_max - position[0];
        if (num <= steps) {
          position[0] += num;
          break;
        } else {
          num -= steps;
          position[0] = width_max;
          transfer();
        }
      } else if (direction == 1) { // B\u1EAFc
        int steps = height_max - position[1];
        if (num <= steps) {
          position[1] += num;
          break;
        } else {
          num -= steps;
          position[1] = height_max;
          transfer();
        }
      } else if (direction == 2) { // T\xE2y
        int steps = position[0];
        if (num <= steps) {
          position[0] -= num;
          break;
        } else {
          num -= steps;
          position[0] = 0;
          transfer();
        }
      } else if (direction == 3) { // Nam
        int steps = position[1];
        if (num <= steps) {
          position[1] -= num;
          break;
        } else {
          num -= steps;
          position[1] = 0;
          transfer();
        }
      }
    }
  }

  List<int> getPos() {
    return position;
  }

  String getDir() {
    return location[direction];
  }
}

```