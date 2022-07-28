/* 
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

function solution(sequence) {
    var count = 0
    var index = 0

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            count += 1
            index = i
        }
    }

    if (count == 0) return true;
    if (count > 1) return false;
    console.log(index)
    // If only the last or the
    // first element is removed
    console.log(sequence.length)
    if (index == ((sequence.length) - 2) || index == 0)
        return true;

    // If a[index] is removed
    if (sequence[index - 1] < sequence[index + 1])
        return true;

    // If a[index + 1] is removed
    if (sequence[index] < sequence[index + 2])
        return true;

    return false;
}

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.