import service from "@/utils/axios";

/**
 * 获取车手排名
 *
 * @param year
 * @returns
 */
export function getDriverStandings(year: number) {
  return service.request({
    url: `/mock/api/standings/driver/${year}`,
    method: "get",
  });
}

/**
 * 获取车队排名
 *
 * @param year
 * @returns
 */
export function getTeamStandings(year: number) {
  return service.request({
    url: `/mock/api/standings/team/${year}`,
    method: "get",
  });
}

/**
 * 获取车手详情
 */
export function getDrivers(name: string) {
  return service.request({
    url: `/mock/api/drivers/${name}`,
    method: "get",
  });
}

/**
 * 获取赛程
 */
export function getSchedule() {
  return service.request({
    url: "/mock/api/schedule",
    method: "get",
  });
}
