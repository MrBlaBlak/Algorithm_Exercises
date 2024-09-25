# Problem Description

Given a list of link stations, each with a position `(x, y)` and a power radius, and a device position `(x, y)`, the task is to find the link station that provides the strongest signal to the device.

## Signal Strength Calculation:
The strength of the signal is determined by the formula:
`power = (power_radius - distance)^2`
Where:
- `distance` is the Euclidean distance between the device and the link station.
- If the distance is greater than the power radius, the station does not reach the device, and the power is `0`.

### Input:

1. **Link Stations**: A 2D array where each element represents a link station. Each element is an array containing:
    - `x-coordinate` of the link station
    - `y-coordinate` of the link station
    - `power radius` of the link station

2. **Device Position**: A 2-element array representing the coordinates `[x, y]` of the device.

### Output:

The program outputs a message indicating one of the following:

- **If a link station is available**: The `x` and `y` coordinates of the best link station, along with the power it provides at the device's location.
- **If no link station is available**: A message stating that no link station is within reach.

## Example:

```bash
Link stations: [[0, 0, 10], [20, 20, 5], [10, 0, 12]]
Device position: [18, 18]

Output: Best link station for point [18, 18] is [20, 20] with power 4.0