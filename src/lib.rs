#[no_mangle]
pub fn add_two(x: i32) -> i32 {
    x + 2
}

#[cfg(test)]
mod tests {
    use super::add_two;

    #[test]
    fn it_works() {
        assert_eq!(add_two(2), 4);
        assert_eq!(add_two(3), 5);
        assert_eq!(add_two(42), 44);
        assert_eq!(add_two(-3), -1);
    }
}
