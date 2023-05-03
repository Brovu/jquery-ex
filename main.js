$(document).ready(() => {
  //Get cost mission
  const costMiss1 = Math.ceil(Math.random() * 100000 + 10000);
  $(".cost-mission1").html(costMiss1);
  const costMiss2 = Math.ceil(Math.random() * 100000 + 10000);
  $(".cost-mission2").html(costMiss2);
  const costMiss3 = Math.ceil(Math.random() * 100000 + 10000);
  $(".cost-mission3").html(costMiss3);
  const costMiss4 = Math.ceil(Math.random() * 100000 + 10000);
  $(".cost-mission4").html(costMiss4);
  const costAll = costMiss1 + costMiss2 + costMiss3 + costMiss4;
  $(".cost-all > b").html(costAll);

  //Get cost inout
  $(".btn-danger").click(() => {
    $(".cost-get").val(costAll);
  });

  //withdraw money
  $(".btn-success").click(() => {
    const costWithdraw = $(".cost-get").val();
    if (isNaN(costWithdraw)) {
      alert("Nhập sai giá trị, mời nhập lại");
      $(".cost-get").val("");
      $(".cost-get").focus();
      return;
    }
    if (costWithdraw > costAll) {
      alert("Số dư không đủ");
      $(".cost-get").focus();
    } else {
      alert(`Bạn đã rút thành công ${costWithdraw}`);
      $(".cost-get").val("");
      const surplus = costAll - costWithdraw;
      $(".cost-all > b").html(surplus);
    }
  });

  //Get info mission
  const infoMissions = ["1", "2", "3", "4"];
  infoMissions.map((infoMission) => {
    $(`.info-mission${infoMission}`).hide();
    $(`.list-mission${infoMission}`).click(() => {
      $(`.info-mission${infoMission}`).toggle();
    });
  });

  $(".info-cost1").html(costMiss1);
  $(".info-cost2").html(costMiss2);
  $(".info-cost3").html(costMiss3);
  $(".info-cost4").html(costMiss4);

  //Get Date
  const d = new Date();

  const month = d.getMonth() + 1;
  const day = d.getDate();

  const output =
    (day < 10 ? "0" : "") +
    day +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    d.getFullYear();
  $(".info-date").html(output);
});
