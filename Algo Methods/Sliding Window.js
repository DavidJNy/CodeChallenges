// 3 Key Steps
// The Sliding Window boils down to 3 key steps.

// Expand our window
// Meet the condition and process the window
// Contract our window

// def sliding_window(nums):
// left, right = 0, 0        # Intialize our window's bound
// count_of_zeroes = 0       # Track how many 0’s are in the window
//     # Iterate over elements in our input
// while right < len(nums):
//         # Expand the window
//         # Meet the condition to stop expansion
// while count_of_zeroes == 2:
//             # Process the current window   
//             # Contract the window
// right += 1 

// def sliding_window(nums):
//      left, right = 0, 0        # Our window bounds
//      count_of_zeroes = 0       # Track how many 0’s are in the window
//      global_max = 0            # Track the maximum, overall

//     # Iterate over elements in our input
//      while right < len(nums):

//            # Expand the window
//          if nums[right] == 0:
//          count_of_zeroes += 1

//              # Meet the condition to stop expansion
//              while count_of_zeroes == 2:

//                   # Process the current window
//                  global_max = max(global_max, right - left)

//                    # Contract the window

//          right += 1
//      return global_max