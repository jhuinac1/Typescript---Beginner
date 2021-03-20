var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.InProgress);
console.log(StatusEnum.NotStarted);
console.log(StatusEnum.Done);
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
var Status2Enum;
(function (Status2Enum) {
    Status2Enum["NotStarted"] = "not started";
    Status2Enum["InProgress"] = "in Progress";
    Status2Enum["Done"] = "Done";
})(Status2Enum || (Status2Enum = {}));
var notStartedStatus2 = Status2Enum.NotStarted;
notStartedStatus2 = Status2Enum.Done;
console.log(notStartedStatus2);
