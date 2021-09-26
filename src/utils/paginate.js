import _ from "lodash";

export default function Paginate(items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 1) * pageSize; //find the 0 based start point and multiply by page size to get how many items to skip
	return _(items).slice(startIndex).take(pageSize).value();

	// _(items) returns a lodash collection of your array
	// slice gets the array starting from a place (optionally to end)
	// take just takes how many you want after that
	// value convers the wrapper object to an array
}
