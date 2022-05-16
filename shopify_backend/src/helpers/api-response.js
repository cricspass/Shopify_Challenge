exports.successResponse = function (res, msg) {
	var data = {
		success: true,
		message: msg
	};
	return res.status(200).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
	var resData = {
		success: true,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.errorResponse = function (res, msg) {
	var data = {
		success: false,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		success: false,
		message: msg,
	};
	return res.status(404).json(data);
};