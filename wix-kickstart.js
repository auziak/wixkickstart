// Kickstart testing example
const text = "Paste1 12your text here";
const messageSize = 12;

// Main function
function messagesAmount(s, k) {
  // Received text value determined as valid in the task
  // So no validation :((

  const words = s.split(" ");
  let count = 0; // messages amount

  // Check if whole text could be contained in one message
  if (s.length <= k) {
    return 1;
  } else {
    // No? Ok, lets check each word
    for (let i = 0; i < words.length; i++) {
      console.log(
        'this message will start with word: "' +
          words[i] +
          '" index = ' +
          i +
          " count = " +
          count
      );
      if (!words[i]) {
        return count;
      } else {
        // If there is word that can't be contained in message return -1
        if (words[i].length > k) {
          return -1;
        } else {
          // If only one word can be contained in message
          if (words[i].length >= k - 1) {
            // To contain at least one more word, message should have place for at least 2 characters, including " ".
            // so if there is no at least 2 spare cells, message could contain only one word
            count++; // End of message
            console.log(
              'this message will contain only one word: "' +
                words[i] +
                '", count = ' +
                count
            );
          } else {
            // If last element, it wil just fill last message
            if (i === words.length - 1) {
              count++; // End of message
            } else {
              // We already checked if one word can be contained in message
              // and if there is a plase for " " and at least one character
              // thus we will start with next word addition
              let accumulator = words[i].length + words[i + 1].length; // Add next word
              // j - represents amount of additions and joints
              for (let j = 1; j <= words.length - i - 1; j++) {
                // check if enough place for two or more words
                if (accumulator <= k - j) {
                  // add next word if not last in text]
                  if (words[j + i + 1]) {
                    accumulator += words[j + i + 1].length;
                  } else {
                    // last word
                    count++;
                    // this will finish main iteration cycle
                    i = i + j + 1;
                    // add 1 because we starting with 2 words
                    // when j starts with 1
                  }
                  // we shouls subtract spaces
                } else {
                  count++; // End of message
                  // now we at index of word which will start next message
                  // but main iteration cycle will add 1 to i,
                  // so we should subtract it
                  i = j + i - 1;
                  // and lets finish this circle without extensive complexity
                  j = words.length;
                  console.log(
                    'next message will start with word: "' +
                      words[i + 1] +
                      '" index = ' +
                      (i + 1)
                  );
                  console.log("count = " + count);
                }
              }
            }
          }
        }
        console.log("end of main circle, count = " + count);
      }
    }
    console.log("iteration finished, final count = " + count);
    return count;
  }
}

console.log(messagesAmount(text, messageSize));
