import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Result "mo:base/Result";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Option "mo:base/Option";
import Nat64 "mo:base/Nat64";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
actor {
    public type StudentDet = {
        rollNo: Text;
        name: Text;
    };
    public type MarksDet = {
        rollNo: Text;
        marks: [Nat64];
    };

    var studet: [StudentDet] = [];
    var stuMarks: [MarksDet] = [];

    public func addstudent(det: StudentDet): async Text {
        studet := Array.append<StudentDet>(studet, [det]);
        return "successfully entered";
    };

    public shared query func getAllParticipants(): async [StudentDet] {
        return studet;
    };

    public shared query func getStudentDetById(rollNo: Text): async ?StudentDet {
        return Array.find<StudentDet>(studet, func x = x.rollNo == rollNo);
    };

    public func PushStudentMarks(marks: MarksDet): async Text {
        stuMarks := Array.append<MarksDet>(stuMarks, [marks]);
        return "Marks entered";
    };

    public shared query func getMarksById(rollNo: Text): async ?MarksDet {
        return Array.find<MarksDet>(stuMarks, func x = x.rollNo == rollNo);
    };
};
