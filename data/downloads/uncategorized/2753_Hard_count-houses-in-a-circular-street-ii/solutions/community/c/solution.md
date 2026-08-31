# Between Open Doors

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3698269/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3698269/)

---

We count steps, and track the position of `firstOpen` and `lastOpen` doors.

We leave the very first open door open, and close all open doors afterwards.

After a full cycle, we close the very first open door, and the lenght of the cycle is `lastOpen - firstOpen`.

Note that we stop moving after `k` steps from the `lastOpen` door - we surelly won't find open doors no more.

**C++**
```cpp
int houseCount(Street* street, int k) {
    int firstOpen = INT_MAX, lastOpen = 0;
    for(int cnt = 0; cnt - lastOpen <= k; ++cnt) {
        if (street->isDoorOpen()) {
            firstOpen = min(firstOpen, cnt);
            lastOpen = cnt;
            if (firstOpen != lastOpen)
                street->closeDoor();            
        }
        street->moveRight();
    }
    return lastOpen - firstOpen;
}
```