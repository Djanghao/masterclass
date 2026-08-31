# copy at ur own RISK AHAHAHAHAH | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/4171571/](https://leetcode.com/problems/minimum-area-rectangle/solutions/4171571/)

---


# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn min_area_rect(points: Vec<Vec<i32>>) -> i32 {
        let mut temp_points: Vec<Vec<i32>> = vec![];
        // let mut points_x_ys: HashMap<i32, Vec<i32>> = HashMap::new();
        // // [x, [y1, y2, y3, ...]]
        // let mut points_y_xs: HashMap<i32, Vec<i32>> = HashMap::new();
        // // [y, [x1, x2, x3, ...]]
        for point in points {
            temp_points.push(point.to_vec());
            // if let Some(ys) = points_x_ys.get_mut(&point[0]) {
            //     ys.push(point[1]);
            // } else {
            //     points_x_ys.insert(point[0], vec![point[1]]);
            // }
            // if let Some(xs) = points_y_xs.get_mut(&point[1]) {
            //     xs.push(point[0]);
            // } else {
            //     points_y_xs.insert(point[1], vec![point[0]]);
            // }
        }
        temp_points.sort_by(|a, b| {
            if a[0] != b[0] {a[0].cmp(&b[0])}
            else {a[1].cmp(&b[1])}
        });
        let mut min_area = i32::MAX;
        

        for i in 0..temp_points.len()-3 {
            let first_point: Vec<i32> = temp_points[i].to_vec();
            // println!("first:{:?}", first_point);
            let mut idx: usize = i + 1;
            while idx < temp_points.len()-2 && temp_points[idx][0] == temp_points[i][0] {
                // println!("second:{:?}", temp_points[idx]);
                let mut second_point: Vec<i32> = temp_points[idx].to_vec();
                let width: i32 = second_point[1] - first_point[1]; 

                // find the third point  
                let mut third_points: Vec<Vec<i32>> = vec![];
                for j in idx+1..temp_points.len() {
                    if temp_points[j][1] == first_point[1] {
                        third_points.push(temp_points[j].to_vec());
                    }
                }
                if third_points.len() == 0 {
                    idx += 1;
                    continue
                }
                // println!("third:{:?}", third_points);
                // find the fourth point
                let mut fourth_points: Vec<Vec<i32>> = vec![];
                for j in idx+1..temp_points.len() {
                    if temp_points[j][1] == second_point[1] {
                        fourth_points.push(temp_points[j].to_vec());
                    }
                }

                if fourth_points.len() == 0 {
                    idx += 1;
                    continue
                }
                // println!("fourth:{:?}", fourth_points);

                // finding the same xs in both third and fourth
                for third in &third_points {
                    for fourth in &fourth_points {
                        if third[0] == fourth[0] {
                            let length = third[0] - first_point[0];
                            let temp_area = width * length;
                            if temp_area < min_area {
                                min_area = temp_area;
                            }
                        }
                    }
                }

                // println!("first:{:?}\
second:{:?}\
thirds:{:?}\
fourth:{:?}", first_point, second_point, third_points, fourth_points);
                idx += 1;
            }

        }


        ////////
        // for (_, ys) in points_x_ys.iter_mut() {
        //     ys.sort();    
        // }
        // for (_, xs) in points_y_xs.iter_mut() {
        //     xs.sort();    
        // }
        // the arr in map already been sorted
        // for (x_1, ys_1) in points_x_ys.iter() {
        //     if ys_1.len() == 1 {continue}
        //     for i in 0..ys_1.len() {
        //         for j in i+1..ys_1.len() {
        //             let width: i32 = ys_1[j] - ys_1[i];
        //             println!("width:{}\
x_1:{},ys_1_i:{}--ys_1_j:{}", width, x_1, ys_1[i], ys_1[j]);
        //             // y_2, xs_2    
        //             if let Some(xs_2_i) = points_y_xs.get(&ys_1[i]) {
        //                 if let Some(xs_2_j) = points_y_xs.get(&ys_1[j]) {
        //                     println!("xs_2_i:{:?}\
xs_2_j:{:?}", xs_2_i,xs_2_j);
        //                 }
        //             }
        //         }
        //     }
        // }

        // TEST
        println!("{:?}", temp_points);
        // println!("x_ys:{:?}", points_x_ys);
        // println!("y_xs:{:?}", points_y_xs);
        // TEST
        ////////


        if min_area == i32::MAX {return 0}
        min_area
    }
}
```