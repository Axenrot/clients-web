import Swal from "sweetalert2";

export function shoot(message, icon = "success") {
  let timerInterval;
  Swal.fire({
    title: message,
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    icon,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal?.getPopup()?.querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}
