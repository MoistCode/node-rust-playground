#[no_mangle]
pub extern "C" fn fibonacci(x: i32) -> i32 {
    if x <= 2 {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}

// #[no_mangle]
// pub extern "C" fn fetch_emails(html_string: String) {
//     println!("Hello, world!");
// }

#[no_mangle]
pub extern "C" fn hello() {
    println!("Hello, world!");
}

// fn fibonacci(x: i32) -> i32 {
//     if x <= 2 {
//         return 1;
//     } else {
//         return fibonacci(x - 1) + fibonacci(x - 2);
//     }
// }
