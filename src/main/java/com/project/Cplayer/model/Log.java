package com.project.Cplayer.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.Id;
@Entity
public class Log {

    @Id
    @GeneratedValue
    private Integer logId;
    private Integer uid;
    private String token;
    private Date genDate;
    private Long expiringTime;

    @Override
    public String toString() {
        return "{" +
            " uid='" + uid + "'" +
            ", token='" + token + "'" +
            ", genDate='" + genDate + "'" +
            ", expiringTime='" + expiringTime + "'" +
            "}";
    }

    public Integer getLogId() {
        return this.logId;
    }

    public void setLogId(Integer logId) {
        this.logId = logId;
    }
    
    public Integer getUid() {
        return this.uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getGenDate() {
        return this.genDate;
    }

    public void setGenDate(Date genDate) {
        this.genDate = genDate;
    }

    public Long getExpiringTime() {
        return this.expiringTime;
    }

    public void setExpiringTime(Long expiringTime) {
        this.expiringTime = expiringTime;
    }

    public Log(Integer lid,Integer uid, String token, Date genDate, Long expiringTime) {
        this.logId=lid;
        this.uid = uid;
        this.token = token;
        this.genDate = genDate;
        this.expiringTime = expiringTime;
    }

    public Log() {
    }
    
}