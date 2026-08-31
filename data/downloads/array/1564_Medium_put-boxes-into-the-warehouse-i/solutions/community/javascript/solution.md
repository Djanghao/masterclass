# Java | JavaScript | C++ Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/2219853/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/2219853/)

---

**Java**
```
import java.util.Arrays;

class Solution {

    public int maxBoxesInWarehouse(int[] boxes, int[] warehouse) {

        //alternatively, in-place: warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
        int[] smallestRoomFromEntrance = new int[warehouse.length];
        smallestRoomFromEntrance[0] = warehouse[0];
        for (int i = 1; i < warehouse.length; ++i) {
            smallestRoomFromEntrance[i] = Math.min(smallestRoomFromEntrance[i - 1], warehouse[i]);
        }

        Arrays.sort(boxes);
        int indexBoxes = 0;
        int indexWarehouseRooms = warehouse.length - 1;
        int countStoredBoxes = 0;

        while (indexBoxes < boxes.length && indexWarehouseRooms >= 0) {
            if (boxes[indexBoxes] <= smallestRoomFromEntrance[indexWarehouseRooms]) {
                ++indexBoxes;
                ++countStoredBoxes;
            }
            --indexWarehouseRooms;
        }
        return countStoredBoxes;
    }
}
```
**JavaScript**
```
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {

    //alternatively, in-place: warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
    const smallestRoomFromEntrance = new Array(warehouse.length).fill(0);
    smallestRoomFromEntrance[0] = warehouse[0];
    for (let i = 1; i < warehouse.length; ++i) {
        smallestRoomFromEntrance[i] = Math.min(smallestRoomFromEntrance[i - 1], warehouse[i]);
    }

    boxes.sort((x, y) => x - y);
    let indexBoxes = 0;
    let indexWarehouseRooms = warehouse.length - 1;
    let countStoredBoxes = 0;

    while (indexBoxes < boxes.length && indexWarehouseRooms >= 0) {
        if (boxes[indexBoxes] <= smallestRoomFromEntrance[indexWarehouseRooms]) {
            ++indexBoxes;
            ++countStoredBoxes;
        }
        --indexWarehouseRooms;
    }
    return countStoredBoxes;
};
```
**C++**
```
#include <vector>
using namespace std;

class Solution {
    
public:
    int maxBoxesInWarehouse(vector<int>& boxes, vector<int>& warehouse) {

        //alternatively, in-place: warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
        vector<int> smallestRoomFromEntrance(warehouse.size());
        smallestRoomFromEntrance[0] = warehouse[0];
        for (int i = 1; i < warehouse.size(); ++i) {
            smallestRoomFromEntrance[i] = min(smallestRoomFromEntrance[i - 1], warehouse[i]);
        }

        sort(boxes.begin(), boxes.end());
        int indexBoxes = 0;
        int indexWarehouseRooms = warehouse.size() - 1;
        int countStoredBoxes = 0;

        while (indexBoxes < boxes.size() && indexWarehouseRooms >= 0) {
            if (boxes[indexBoxes] <= smallestRoomFromEntrance[indexWarehouseRooms]) {
                ++indexBoxes;
                ++countStoredBoxes;
            }
            --indexWarehouseRooms;
        }
        return countStoredBoxes;
    }
};
```