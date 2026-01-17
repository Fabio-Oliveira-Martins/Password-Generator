export function copied_alert() {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "#000000",
        color: "#fff",
        iconColor: "#75a3ff",

        customClass: {
            popup: "custom-toast",
            title: "pop-up__font"
        }
    });
    Toast.fire({
        icon: "success",
        title: "Copied successfully"
    });
    return Toast;
}