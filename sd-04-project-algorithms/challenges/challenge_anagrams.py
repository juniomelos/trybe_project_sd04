def string_sort(string):
    array = [letter for letter in string]
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return "".join(array)


def is_anagram(first_string, second_string):
    first_string_sorted = string_sort(first_string)
    second_string_sorted = string_sort(second_string)
    if first_string_sorted == second_string_sorted:
        return True
    return False
    # return True if first_string_sorted == second_string_sorted else False
