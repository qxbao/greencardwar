# Greencard war
Minigame đoán từ chạy bằng Javascript
## Sơ lược
Một game đơn giản chạy trên Nodejs. Tất cả dữ liệu được lưu trữ trên local storage, question set lưu trong file json, không yêu cầu database.
## Hướng dẫn chạy trên localhost
Clone project, giải nén chạy file index:
```node index.js```, mặc định port 80
## Luật chơi
- Để chiến thắng cần diệt xong boss, boss chưa chết không xét điểm cá nhân
- 1 câu trả lời đúng trừ 100 máu boss
- Trả lời đúng +1 điểm cá nhân, sai -1 điểm cá nhân
- Để chiến thắng cần ít nhất 1 điểm cá nhân.
- Nhiều người có cùng số điểm cao nhất => Có thể quay random chọn 1 hoặc không

Có thể phát triển để tăng tính tùy biến, hên xui
## Tính năng
- Skip câu hỏi
- Chọn question set theo id
- Có thể tiếp tục game đang chơi dở
- Từ chối summary khi game chưa hoàn thành
## Lưu ý
- Không hỗ trợ điện thoại vì không có thời gian :D
- Bug đã fix được kha khá, nếu vẫn còn thì tự fix hoặc report

## Demo
https://youtu.be/1V11gT-QyOc