const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  //   ssl: {
  //     rejectUnauthorized: true,
  //     ca: `-----BEGIN CERTIFICATE-----
  // MIIEQTCCAqmgAwIBAgIUMeC9Gy5NN1gw0W9zOcQGhsAuAUkwDQYJKoZIhvcNAQEM
  // BQAwOjE4MDYGA1UEAwwvNmU3M2EzNmMtMGE5Mi00N2NlLThmY2ItNmE0MDVlY2Q1
  // NTA2IFByb2plY3QgQ0EwHhcNMjQwNjI0MTEyNTAxWhcNMzQwNjIyMTEyNTAxWjA6
  // MTgwNgYDVQQDDC82ZTczYTM2Yy0wYTkyLTQ3Y2UtOGZjYi02YTQwNWVjZDU1MDYg
  // UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANU2sSDt
  // BIK3TD5ipjn2otXaeRccyRWO+KJ70qoCrYQfG6KzoSpYC3mdpmJ3FhsvtGpU/7II
  // Y0vBprxoBt4SE+rWurwPXP6Ic/3v0tUR4MQxXi5fVlkxxmWwiMvxzZmSt5H7HSHp
  // FPYdYMK/ngsEuz2TIymXsV7hzTSNJ4S7+k0CVhQJgKG2B3bIZzwz1YNMseGeHgvd
  // lH6r6bzE2/vGwSjVcn6N/9W3jJ3wheQmOFTC+V5C5O6DvRmICTEHXJjN+RiZPtMY
  // dWpNP0azJRdz3usFvTLepVp4GqjUyks3f0kkCV9x+pstE8EoizBcIQcrQcZf4yHE
  // ZSXLCyDugebuIKx36PX8AnQQ1D5toMxGyPlGZutlzd4sRaqq7RIFdL/qC+ldoGOw
  // c+8zzHfygKoYfzVNIbxL8bhKrItkWQqgolb4oewoFagUa8Vxxw7vXFw9bGjqYmTH
  // mXoTcBdlFtR9UNT88Dl1IIsNNSvlrEodwaNcvgaJp4MiwbAtoGaspZEU+wIDAQAB
  // oz8wPTAdBgNVHQ4EFgQUdv0yif68CrB2Ztxb4OimK93fsw4wDwYDVR0TBAgwBgEB
  // /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAEgrUCsJyPDAjcbL
  // Kl0nlUxy89ht/5Hv/8yYfULBYMWgLpYbQRbHt7v5NVZ6Hsj4dkfaCfXTvAzhXpNG
  // X+tmpThQQ/KsBC58CkHuFs9pPGKRQ+JjDKCwyoeld4QDfSRArW7zbK07nWgcyUDu
  // 4FdkkPsGITcBbF+cW+DI0b37uB50w9GeeHgS8l8YQBUDdQbnIoutS3craXVw03SA
  // OScSFeIc5bfgtZnmsWnEnfetG1pqmDnNbrZdzxldYWg8Jm5Xalv1HWMJRiTa9yvp
  // 8XVhJYn8gPEsUO4sBBmpUEPswYSDIAXmQb1pwtcN1XOaazcUMzvOnG7lSXyrOl/I
  // MW4R0i5qFhtamrKsSUpoZZ1B7YueQjqKpCmzO5HdZVczJ16FfsLt4io6IGbl9IGW
  // Um0DEc+9IInk1nNhp6BDMO4WHNBBAOhhFG8OS935c4kXE+28AKtWJyfczpXY+ijb
  // hPIipJ9bwD0SInQrDJrpsPOCq9Hg5D0e1IDyF4fBsedWgqH35Q==
  // -----END CERTIFICATE-----`,
  // },
};
module.exports = config;
