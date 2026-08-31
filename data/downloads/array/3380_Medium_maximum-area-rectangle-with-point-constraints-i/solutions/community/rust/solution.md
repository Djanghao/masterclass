# Rust with Simple Simulation

**Author:** Hybrid-001
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6127901/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6127901/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simulation
# Approach
<!-- Describe your approach to solving the problem. -->
Simulation
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```rust []
impl Solution {
    pub fn max_rectangle_area(points: Vec<Vec<i32>>) -> i32 {
        let mut max_rectangle_area_val = -1;
        for idx in 0..points.len() {
            let mut p = vec![0; points.len()];
            let row = points[idx][0];
            let col = points[idx][1];
            p[idx] = 1;

            // Find the other points with same col
            let mut right_idx = idx;
            let mut left_idx = idx;
            for jdx in 0..points.len() {
                if p[jdx] == 0 && points[jdx][1] == col {
                    if points[jdx][0] >= row {
                        if right_idx != idx {
                            if points[jdx][0] <= points[right_idx][0] {
                                right_idx = jdx;
                            }
                        } else {
                            right_idx = jdx;
                        }
                    } else {
                        if left_idx != idx {
                            if points[jdx][0] >= points[left_idx][0] {
                                left_idx = jdx;
                            }
                        } else {
                            left_idx = jdx;
                        }
                    }
                }
            }

            if (right_idx != idx && points[right_idx][0] == row) || (right_idx == idx && left_idx == idx) {
                continue;
            }

            // Find the other points with same row
            let mut up_idx = idx;
            let mut down_idx = idx;
            for jdx in 0..points.len() {
                if p[jdx] == 0 && points[jdx][0] == row {
                    if points[jdx][1] >= col {
                        if up_idx != idx {
                            if points[jdx][1] <= points[up_idx][1] {
                                up_idx = jdx;
                            }
                        } else {
                            up_idx = jdx;
                        }
                    } else {
                        if down_idx != idx {
                            if points[jdx][1] >= points[down_idx][1] {
                                down_idx = jdx;
                            }
                        } else {
                            down_idx = jdx;
                        }
                    }
                }
            }

            if (up_idx != idx && points[up_idx][1] == col) || (up_idx == idx && down_idx == idx) {
                continue;
            }

            if right_idx != idx && up_idx != idx && right_idx != up_idx {
                p[right_idx] = 1;
                p[up_idx] = 1;

                // Find the last point
                let mut find = idx;
                for jdx in 0..points.len() {
                    if p[jdx] != 1 && points[jdx][0] == points[right_idx][0] && points[jdx][1] == points[up_idx][1] {
                        p[jdx] = 1;
                        find = jdx;
                        break;
                    }
                }
                if find != idx {
                    // Find If any points lie in the scope
                    let mut validate = true;
                    for jdx in 0..points.len() {
                        if p[jdx] == 0 && points[jdx][0] >= points[idx][0] && points[jdx][1] >= points[idx][1] && points[jdx][0] <= points[find][0] && points[jdx][1] <= points[find][1] {
                            validate = false;
                            break;
                        }
                    }

                    if validate {
                        max_rectangle_area_val = max_rectangle_area_val.max((points[find][0] - points[idx][0]) * (points[find][1] - points[idx][1]));
                    }
                    
                    p[find] = 0;
                }

                p[right_idx] = 0;
                p[up_idx] = 0;
            }

            if right_idx != idx && down_idx != idx && right_idx != down_idx {
                p[right_idx] = 1;
                p[down_idx] = 1;

                // Find the last point
                let mut find = idx;
                for jdx in 0..points.len() {
                    if p[jdx] != 1 && points[jdx][0] == points[right_idx][0] && points[jdx][1] == points[down_idx][1] {
                        p[jdx] = 1;
                        find = jdx;
                        break;
                    }
                }
                if find != idx {
                    // Find If any points lie in the scope
                    let mut validate = true;
                    for jdx in 0..points.len() {
                        if p[jdx] != 1 && points[jdx][0] >= points[down_idx][0] && points[jdx][1] >= points[down_idx][1] && points[jdx][0] <= points[right_idx][0] && points[jdx][1] <= points[right_idx][1] {
                            validate = false;
                            break;
                        }
                    }

                    if validate {
                        max_rectangle_area_val = max_rectangle_area_val.max((points[right_idx][0] - points[down_idx][0]) * (points[right_idx][1] - points[down_idx][1]));
                    }
                    p[find] = 0;
                }

                p[right_idx] = 0;
                p[down_idx] = 0;
            }


            if left_idx != idx && up_idx != idx && left_idx != up_idx {
                p[left_idx] = 1;
                p[up_idx] = 1;

                // Find the last point
                let mut find = idx;
                for jdx in 0..points.len() {
                    if p[jdx] != 1 && points[jdx][0] == points[left_idx][0] && points[jdx][1] == points[up_idx][1] {
                        p[jdx] = 1;
                        find = jdx;
                        break;
                    }
                }
                if find != idx {
                    // Find If any points lie in the scope
                    let mut validate = true;
                    for jdx in 0..points.len() {
                        if p[jdx] != 1 && points[jdx][0] >= points[left_idx][0] && points[jdx][1] >= points[left_idx][1] && points[jdx][0] <= points[up_idx][0] && points[jdx][1] <= points[up_idx][1] {
                            validate = false;
                            break;
                        }
                    }

                    if validate {
                        max_rectangle_area_val = max_rectangle_area_val.max((points[up_idx][0] - points[left_idx][0]) * (points[up_idx][1] - points[left_idx][1]));
                    }

                    p[find] = 0;
                }

                p[left_idx] = 0;
                p[up_idx] = 0;
            }

            if left_idx != idx && down_idx != idx && left_idx != down_idx {
                p[left_idx] = 1;
                p[down_idx] = 1;

                // Find the last point
                let mut find = idx;
                for jdx in 0..points.len() {
                    if p[jdx] == 0 && points[jdx][0] == points[left_idx][0] && points[jdx][1] == points[down_idx][1] {
                        p[jdx] = 1;
                        find = jdx;
                        break;
                    }
                }
                if find != idx {
                    // Find If any points lie in the scope
                    let mut validate = true;
                    for jdx in 0..points.len() {
                        if p[jdx] != 1 && points[jdx][0] >= points[find][0] && points[jdx][1] >= points[find][1] && points[jdx][0] <= points[idx][0] && points[jdx][1] <= points[idx][1] {
                            validate = false;
                            break;
                        }
                    }

                    if validate {
                        max_rectangle_area_val = max_rectangle_area_val.max((points[idx][0] - points[find][0]) * (points[idx][1] - points[find][1]));
                    }
                }
            }
        }

        max_rectangle_area_val
    }
}
```